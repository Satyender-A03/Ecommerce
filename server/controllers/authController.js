const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

const register = async (req, res) => {
  try {
    // console.log("hello");
    const { uName, fName, lName, email, password, phone, address } = req.body;
    // console.log("test");
    if (
      !uName ||
      !fName ||
      !lName ||
      !email ||
      !password ||
      !phone ||
      !address
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const duplicate = await User.findOne({ uName });
    console.log(duplicate);

    if (duplicate) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);
    console.log(hashPass);
    const user = new User({
      uName,
      fName,
      lName,
      email,
      password: hashPass,
      address,
      phone,
    });

    await user.save();
    if (user) {
      return res.status(200).json({ message: "User Successfuly Created" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { uName, password } = req.body;
    if (!uName || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.findOne({ uName });
    if (!user) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }
    const accessToken = jwt.sign(
      { id: user._id, username: user.uName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      {
        id: user._id,
        username: user.uName,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    // const token = { accessToken };
    const { id } = req.params;
    const decoded = jwtDecode.jwtDecode(id);

    console.log(decoded);
    // console.log("run");
    const get = await User.findOne({ _id: decoded.id });
    if (!get) {
      return res.status(400).json({ message: "User not found" });
    }
    res.json(get);
    // return res.status(200).json({ message: "User found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const refresh = async (req, res) => {
  try {
    const { cookies } = req;

    if (!cookies) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const refreshToken = cookies.jwt;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        try {
          if (err) {
            return res.status(401).json({ message: "Unauthorized" });
          }

          const foundUser = await User.findById({ id: decoded.id });

          const accessToken = jwt.sign(
            { id: foundUser._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          res.json(accessToken);
        } catch (error) {
          return res.status(500).json({ message: "Server Error" });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies) {
      return res.sendStatus(204);
    }

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

    res.json({ message: "Cookie Cleared Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  register,
  login,
  getUser,
  refresh,
  logout,
};

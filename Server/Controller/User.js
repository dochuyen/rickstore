import Users from "../Model/UserS.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserS from "../Model/UserS.js";
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserS.findById(id);
    return res.status(200).json({
      data: res.json(user),
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không thể lấy được thông tin người dùng!",
    });
  }
};
const registerUser = async (req, res) => {
  
  const { username, email, password } = req.body;
  try {
    const passwordHash = bcrypt.hashSync(password, 10);
    const user = await Users.findOne({ email });
    if (user) {
      throw new Error("Email đã đăng ký tài khoản!");
    }
    const newUser = await Users.create({
      username,
      email,
      password: passwordHash,
    });
    if (!newUser) {
      throw new Error("Đăng ký tài khoản không thành công!");
    }
    res.status(200).json({
      message: "Tạo tài khoản thành công!",
      data: {
        id: newUser.id,
        username,
        email,
        password: passwordHash,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Tạo tài khoản không thành công!",
      data: null,
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    return res.status(400).json({
      message: "Vui lòng nhập đầy đủ email và mật khẩu!",
    });
  }
  const user = await Users.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Sai tài khoản mật khẩu",
    });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({
      message: "Sai tài khoản mật khẩu",
    });
  }
  const token = jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
    {}
  );
  return res.status(200).json({
    status: "ok",
    message: "Login success",
    data: {
      token,
      email,
      username: user.username,
    },
  });
};
export {loginUser, registerUser, getUser}
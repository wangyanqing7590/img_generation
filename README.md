# Text-to-Image Generation and Editing System

本项目是一个基于Stable Diffusion实现的图像生成与编辑系统，支持从文本描述生成图像，未来将扩展支持图像编辑。前端基于 React + Vite，后端使用 FastAPI + PyTorch 实现，适用于 AIGC 场景的原型开发与部署。

---

## ✨ 项目特点

- 🔤 文本生成图像（Text-to-Image）
- 🌐 前后端分离架构（React + FastAPI）
- 🧠 使用 Stable Diffusion 模型
- 📁 后续将支持图像编辑功能（ControlNet）
- 📦 支持本地运行和部署

---

## 🖼️ 项目预览

| 功能 | 示例 |
|------|------|
| 文本生成图像 | `输入："a panda riding a bicycle"` → 生成图像 |
| 前后端交互 | 使用 axios 实现前端调用 FastAPI 后端接口 |
| 结果展示 | 在网页上实时展示生成图像 |

---

## 🛠️ 技术栈

- **前端**：React + Vite + Axios + TailwindCSS（可选）
- **后端**：Python + FastAPI + Torch + Diffusers
- **模型**：Stable Diffusion v1.4（通过 HuggingFace 加载）
- **开发工具**：VSCode / Cursor、Git、Conda、Node.js

---

## 📦 安装与运行

### 1. 克隆仓库

```bash
git clone https://github.com/your-username/img_generation.git
cd img_generation
```

### 2. 安装后端依赖

```bash
cd backend
conda activate img-gen
pip install -r requirements.txt
```
确保你已登录 Hugging Face 账户并获取 access token，然后运行模型时将其填入或缓存。

### 3. 安装前端依赖并运行

```bash
cd frontend
npm install
npm run dev
```

### 4. 启动后端服务

```bash
cd backend
uvicorn main:app --reload
```


⸻

🔮 路线规划
	•	实现文本生成图像功能
	•	接入 ControlNet，添加图像编辑能力（如草图、边缘图）
	•	支持多种图像条件类型选择
	•	增加生成历史记录、下载与保存功能
	•	部署体验版至 HuggingFace Space 或 Vercel

⸻

📄 License

MIT License

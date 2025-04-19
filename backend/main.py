from fastapi import FastAPI
from pydantic import BaseModel
from PIL import Image
import torch
from diffusers import StableDiffusionPipeline  # 修改为从 diffusers 导入
import io
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from fastapi.responses import StreamingResponse



app = FastAPI()

# 允许所有来源的跨域请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 或者你可以设置特定的域名，允许这些域名的请求
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有 HTTP 方法
    allow_headers=["*"],  # 允许所有请求头
)

# 加载Stable Diffusion模型
model = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4")
model.to("mps" if torch.mps.is_available() else "cpu")
print('using mps' if torch.mps.is_available() else 'using cpu')

class ImageRequest(BaseModel):
    description: str
    seed: int = None

@app.post("/generate_image/")
async def generate_image(request: ImageRequest):
    prompt = request.description
    seed = request.seed if request.seed else torch.randint(0, 2**32, (1,)).item()
    
    # 生成图像
    image = model(prompt, seed=seed).images[0]
    # 读取图片
    # image = Image.open('images.png')

    # 转换图像为字节流，返回给前端
    img_byte_array = io.BytesIO()
    image.save(img_byte_array, format="PNG")
    img_byte_array.seek(0)

    return StreamingResponse(img_byte_array, media_type="image/png")
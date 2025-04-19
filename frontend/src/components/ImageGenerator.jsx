// src/components/ImageGenerator.jsx

import React, { useState } from 'react';
import axios from "axios";


function ImageGenerator() {
    const [description, setDescription] = useState("");
    const [imageSrc, setImageSrc] = useState(null);
  
    const handleGenerate = async () => {
      try {
        const response = await axios.post("http://localhost:8000/generate_image/", {
          description: description,
        }, { responseType: 'arraybuffer' }); // 关键：设置响应类型为 arraybuffer
  
        // 将字节流转换为 Base64 编码
        const imgBase64 = `data:image/png;base64,${arrayBufferToBase64(response.data)}`;
  
        setImageSrc(imgBase64); // 设置图片的 src
      } catch (error) {
        console.error("Error generating image:", error);
      }
    };
      // 将 ArrayBuffer 转换为 Base64 字符串
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);  // 使用 btoa 将二进制字符串转换为 Base64
    };

    return (
        <div>
          <h1>Image Generator</h1>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleGenerate}>Generate Image</button>
          {imageSrc && <img src={imageSrc} alt="Generated" />}
        </div>
      );
    }
    
    export default ImageGenerator;
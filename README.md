
# Profiler AI

**Profiler AI** is a full-stack application that integrates a frontend, a backend, and an image generation module based on **Stable Diffusion WebUI** with the **ADetailer** extension. The project is fully containerized using Docker and orchestrated with Docker Compose for simplified setup and management.

## ✅ Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- NVIDIA GPU compatible with CUDA 11.8

## 📁 Project Structure

Ensure the following folders are located in the **same root directory**:

```
<root-folder>/
│
├── backend/
├── frontend/
├── stable-diffusion-webui/      ← Cloned from AUTOMATIC1111 repo
├── docker-compose.yml
```

## ⚙️ Setup

### 1. Clone Stable Diffusion WebUI

Clone the official repository in the same folder containing `backend` and `frontend`:

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

### 2. Install the ADetailer Extension

Navigate to the `extensions` directory of `stable-diffusion-webui` and clone the ADetailer repo:

```bash
cd stable-diffusion-webui/extensions
git clone https://github.com/Bing-su/adetailer.git
cd ../..
```

### 3. Add the Custom Dockerfile

Inside the `stable-diffusion-webui/` folder, create a file named `Dockerfile` and paste the following content:

```Dockerfile
FROM nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    FORCE_CUDA=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 python3-pip git wget curl \
    libgl1 libglib2.0-0 libgoogle-perftools-dev \
    build-essential cmake libopenblas-dev libomp-dev ninja-build \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip && \
    pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

COPY requirements.txt requirements_versions.txt ./
RUN pip3 install -r requirements_versions.txt || pip3 install -r requirements.txt

RUN pip3 install ninja && \
    pip3 install --extra-index-url https://download.pytorch.org/whl/xformers \
    xformers

COPY . /app

EXPOSE 7860

CMD ["python3", "launch.py", "--api", "--listen", "--xformers"]
```

> ✅ Make sure `requirements.txt` and/or `requirements_versions.txt` are present in the `stable-diffusion-webui` directory.

### 4. Start the Project

From the root folder (where `docker-compose.yml` is located), run:

```bash
docker compose up --build -d
```

This will build the Docker images and launch the containers for the frontend, backend, and stable-diffusion-webui.

## 📌 Project Status

- ✅ React Frontend
- ✅ Backend (NestJS)
- ✅ Stable Diffusion API Integration
- ✅ ADetailer Support
- 🔜 Advanced Profiling Features

## 🙏 Acknowledgements

- This project uses [Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui), which is **not owned** by this repository or its authors.
- All rights and credits for **Stable Diffusion WebUI** and **ADetailer** go to their respective creators and maintainers.
- Special thanks to the open-source community for making such tools freely available and continuously maintained.

## 📄 License

This project is licensed under the **MIT License**.

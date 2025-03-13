# Fancontrol 配置文件可视化编辑器

本项目为纯前端页面，用于可视化 [Fancontrol](https://linux.die.net/man/8/fancontrol)  这个工具的配置文件，需要自行在 fancontrol 中寻找正确的传感器、风扇信息，并自行获取和保存配置文件。

配置文件默认地址为：`/etc/fancontrol`，保存文件后，重启 fancontrol 服务后才能生效

第一次使用，请使用原本的`pwmconfig`指令来获取正确的传感器、风扇

### 该项目可以直接使用 github page 在线版本使用

## 编译运行

```bash
pnpm i
pnpm run dev
```

## 预览

![fancontrol-edit.jpg](.img%2Ffancontrol-edit.jpg)


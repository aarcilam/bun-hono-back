FROM oven/bun:1
WORKDIR /app
COPY . .
VOLUME ["/app/src/db"]
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "src/index.tsx" ]
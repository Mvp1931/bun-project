const PORT= 9000

const server = Bun.serve({
    port: PORT,
    fetch (req) {
        return new Response(`Hello from bun server at Port ${this.port}:: new message`);
    }
});

console.log(`Listening on Port https://localhost:${server.port}`);
import Configuration from "../Configuration";

async function makeRequest({ url, method, body }) {
    method = method || "GET";
    let status = 200;
    var r = await fetch(Configuration.urlApi + "/" + url, {
        method: method,
        body: method !== "GET" ? body : undefined,
        headers: {
            "Content-Type": "application/json"
        }
    });
    status = r.status;
    var data = await r.json();
    return { status, data };
}

class FilmeAPI {
    _controller = "api/filmes"
    async getAll() {
        return await makeRequest({
            url: this._controller
        });
    }

    async getById(id) {
        return await makeRequest({
            url: this._controller + "/" + id
        });
    }

    async criarCompeticao(filmes) {
        return await makeRequest({
            url: this._controller + "/criarCompeticao",
            method: "POST",
            body: JSON.stringify({ filmes })
        });
    }
}

export default new FilmeAPI();
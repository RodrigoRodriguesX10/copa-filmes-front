import Configuration from "../Configuration";

async function makeRequest({ url, method, body }) {
    method = method || "GET";
    let status = 200;
    var r = await fetch(Configuration.urlApi + "/" + url, {
        method: method,
        body: method !== "GET" ? body : undefined
    });
    status = r.status;
    var data = await r.json();
    if (status !== 200) {
        var event = new Event("ErroRequest");
        event.error = data;
        window.dispatchEvent(event);
        return null;
    }
    return data;
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
            url: this._controller,
            method: "POST",
            body: { filmes }
        });
    }
}

export default new FilmeAPI();
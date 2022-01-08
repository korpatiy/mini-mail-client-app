import axios from "axios";

export const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export const API = {
    async clapMessage(id) {
        return await instance.post(`/api/messages/${id}/clap`).then(res => res.data);
    },

    async getMessages() {
        return await instance.get('/api/messages').then(res => res.data);
    },

    async postMessage(message) {
        return await instance.post('api/messages', message).then(res => res.data);
    },

    async getMessage(id) {
        return await instance.get(`/api/messages/${id}`).then(res => res.data);
    },
}


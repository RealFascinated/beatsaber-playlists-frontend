import Config from '../config.json';

export default {
    isLoggedIn() {
        return !!localStorage.getItem('token');
    },

    validateToken() {
        return fetch(this.getApiUrl() + '/validateToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem('token'),
            }),
        });
    },

    isProduction() {
        return process.env.NODE_ENV === 'production';
    },

    getApiUrl() {
        return this.isProduction() ? Config.urls.api.production : Config.urls.api.development;
    },

    redirect(url) {
        document.location.href = url;
    },

    download(url, name) {
        fetch(url, {
            method: "GET",
            headers: {}
        })
        .then(response => {
            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", name); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}
function cadastrarUsuario() {  
    const cpfInput = document.getElementById('cpfInput').value;
    enviarForm(cpfInput);
}

async function enviarForm(cpfInput) {
    const request = {
        authCode: "",   
        document: cpfInput
    };
    const apiUrl = '';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        const data = await response.json();
        console.log(response);
        console.log(data);

        if (response.status === 200 && data.suc === true) {
            document.getElementById('respostaAPI').innerText = `Utilize o código abaixo para resgatar o seu brinde: \n ${data.result}`;
        } else {
            document.getElementById('respostaAPI').innerText = `${data.result}`;
        }
    } catch (error) {
        console.error('Existe o seguinte erro:', error);
    }
}

const handle = async () => {
  const response = await fetch('https://httpbingo.org/json');
  const result = JSON.stringify({
    status: response.status,
    statusText: response.statusText,
    text: await response.text()
  }, undefined, 4);

  const responseUserAgent = await fetch('https://httpbingo.org/json', {
    headers: {'User-Agent': 'wasm-is-cool'}
  });
  const resultUserAgent = JSON.stringify({
    status: responseUserAgent.status,
    statusText: responseUserAgent.statusText,
    text: await responseUserAgent.text()
  }, undefined, 4);
  return new Response(`Response without User-Agent: ${result}\nResponse with User-Agent: ${resultUserAgent}`);
};

addEventListener('fetch', e => e.respondWith(handle(e.request)));

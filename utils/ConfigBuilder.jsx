const ConfigBuilder = (
  method,
  headers,
  body,
  stringify = true,
  includeApi = true,
  includeToken = true,
) => { 
  let Configurations = {
    method,
    headers: {},
  };

  switch (method) {
    case 'G': Configurations.method = 'GET'; break;
    case 'P': Configurations.method = 'POST'; break;
    case 'U': Configurations.method = 'UPDATE'; break;
    case 'PUT': Configurations.method = 'PUT'; break;
    case 'D': Configurations.method = 'DELETE'; break;
  }

  switch (headers) {
    case 'JSON': Configurations.headers['Content-Type'] = 'application/json'; break;
    case 'URL':  Configurations.headers['Content-Type'] = 'application/x-www-form-urlencoded'; break;
    case 'FORM': Configurations.headers['Content-Type'] = 'application/form-data'; break;
  }

  if(includeApi) Configurations.headers['ApiKey'] = process.env.NEXT_PUBLIC_API_KEY;
  if(includeToken) Configurations.headers['Token'] = localStorage.getItem('Token');


  if (Object.keys(body).length > 0) {
    if (stringify) Configurations.body = JSON.stringify(body);
    else Configurations.body = body;
  }

  return Configurations;
};

export default ConfigBuilder;
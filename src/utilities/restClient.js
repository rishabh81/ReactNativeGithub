export const getOperation = async (url)=> (await fetch(url)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        return new Promise((resolve)=>{
                            resolve(data);
                        });
                  }));

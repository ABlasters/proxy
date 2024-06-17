fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://minecraft.net')}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => console.log(data.contents));
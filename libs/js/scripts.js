$('#getWeather').click(()=>{
    let north=$('#north').val()
    let south=$('#south').val()
    let east=$('#east').val()
    let west=$('#west').val()
    $.ajax({
        url : 'libs/php/weather.php',
        type: 'POST',
        dataType: 'json',
        data:{
            north,south,east,west
        },
        success:(res)=>{
            //console.log(res)
            if(res.status.name=="ok"){
                typeof res.data[0]!=="undefined"?
                $('#result').html(`clouds:${JSON.stringify(res.data[0].clouds)}\ntemperature:${JSON.stringify(res.data[0].temperature).split('\"')[1]} Celsius`):
                $('#result').html(`No search result`)

            }
        },
        error:(res)=>{
            //console.log(res)
        }

    })
})

$('#getCountryCode').click(()=>{
    let lat=document.querySelector('#lat').value
    let lng=document.querySelector('#lng').value
    $.ajax({
        url : 'libs/php/countryCode.php',
        type: 'POST',
        dataType: 'json',
        data:{
            lat,lng
        },
        success:(res)=>{
            console.log(res)
            if(res.status.name=="ok"){
               typeof res.data.status !="object"?
               $('#result').html(`the country of lat: ${lat},lng: ${lng} is ${res.data.countryName} and it\'s contry code is ${res.data.countryName}.`):
               $('#result').html(`${res.data.status.message}`)
            }
        },
        error:()=>{
            console.log('error happened')
        }

    })
})

$('#getTimeZone').click(()=>{
    let lat=$('#lat').val()
    let lng=$('#lng').val()
    $.ajax({
        url : 'libs/php/timezone.php',
        type: 'POST',
        dataType: 'json',
        data:{
            lat,lng
        },
        success:(res)=>{
            console.log(res)
            if(res.status.name=="ok"){
                typeof res.data.countryName !=="undefined"?
                $('#result').html(`the country of lat: ${lat},lng: ${lng} is ${res.data.countryName} and it\'s contry code is ${res.data.countryCode} and the time is ${res.data.time}.`):
                $('#result').html(`No search result`)

            }
        },
        error:()=>{
            console.log('error happened')
        }

    })
})
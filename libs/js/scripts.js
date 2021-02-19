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
                !res.data.message?
                $('#result').html(`clouds:${JSON.stringify(res.data[0].clouds)}\ntemperature:${JSON.stringify(res.data[0].temperature).split('\"')[1]} Celsius`):
                $('#result').html(`${res.data.message}`)

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
                !res.data.message?
                $('#result').html(`the country of lat: ${lat},lng: ${lng} is ${JSON.stringify(res.data.countryName).split('\"')[1]} and it\'s contry code is ${JSON.stringify(res.data.countryCode).split('\"')[1]}.`):
                $('#result').html(`${res.data.message}`)

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
                $('#result').html(`the country of lat: ${lat},lng: ${lng} is ${JSON.stringify(res.data.countryName).split('\"')[1]} and it\'s contry code is ${JSON.stringify(res.data.countryCode).split('\"')[1]} and the time is ${JSON.stringify(res.data.time).split('\"')[1]}.`)
                console.log(res.data[0])

            }
        },
        error:()=>{
            console.log('error happened')
        }

    })
})
$('#getWeather').click(()=>{
    let north=44.1
    let south=-9.9
    let east=-22.4
    let west=55.2
    $.ajax({
        url : 'libs/php/weather.php',
        type: 'POST',
        dataType: 'json',
        data:{
            north,south,east,west
        },
        success:(res)=>{
            console.log(res)
            if(res.status.name=="ok"){
                $('#result').html(`clouds:${JSON.stringify(res.data[0].clouds)}\ntemperature:${JSON.stringify(res.data[0].temperature).split('\"')[1]} Celsius`)
                console.log(res.data[0])

            }
        },
        error:(res)=>{
            console.log(res)
        }

    })
})

$('#getCountryCode').click(()=>{
    let lat=46.03
    let lng=10.2
    $.ajax({
        url : 'libs/php/countryCode.php',
        type: 'POST',
        dataType: 'json',
        data:{
            lat:lat,lng:lng
        },
        success:(res)=>{
            console.log(res)
            if(res.status.name=="ok"){
                $('#result').html(`the country of lat: ${lat},lng: ${lng} is ${JSON.stringify(res.data.countryName).split('\"')[1]} and it\'s contry code is ${JSON.stringify(res.data.countryCode).split('\"')[1]}.`)
                console.log(res.data[0])

            }
        },
        error:()=>{
            console.log('error happened')
        }

    })
})

$('#getTimeZone').click(()=>{
    let lat=46.03
    let lng=10.2
    $.ajax({
        url : 'libs/php/timezone.php',
        type: 'POST',
        dataType: 'json',
        data:{
            lat:lat,lng:lng
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
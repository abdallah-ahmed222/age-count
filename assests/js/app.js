let date = document.querySelector( '#date' )

let btn = document.querySelector( '#btn' ).addEventListener( 'click', function ()
{

    let counter = setInterval( () =>
    {
        let countDown = new Date( date.value ).getTime();
        let dateNow = new Date().getTime();
        let innerDate = countDown - dateNow;
        let days = Math.floor( innerDate / ( 1000 * 60 * 60 * 24 ) );
        let hours = Math.floor( ( innerDate % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ) - 2;
        let minutes = Math.floor( ( innerDate % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
        let seconds = Math.floor( ( innerDate % ( 1000 * 60 ) ) / 1000 );
        let dayDiv = document.querySelector( ".days" )
        dayDiv.innerHTML = days < 10 ? `0${ days }` : days;
        let hourDiv = document.querySelector( ".hours" )
        hourDiv.innerHTML = hours < 10 ? `0${ hours }` : hours;
        let minDiv = document.querySelector( ".minutes" )
        minDiv.innerHTML = minutes < 10 ? `0${ minutes }` : minutes;
        let secDiv = document.querySelector( ".seconds" )
        secDiv.innerHTML = seconds < 10 ? `0${ seconds }` : seconds;
        if ( innerDate < 0 )
        {
            clearInterval( counter );
            alert( 'Finish' )
            dayDiv.innerHTML = ""
            hourDiv.innerHTML = ""
            minDiv.innerHTML = ""
            secDiv.innerHTML = ""
        }
    }, 1000 )
} )





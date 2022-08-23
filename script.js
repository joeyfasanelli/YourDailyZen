const api_url ="https://favqs.com/api/qotd";
const $button = $('button');
const $author = $('#author')
const $quote = $('#quote')

async function getapi(url)
    {
      const response = await fetch(url);
      var data = await response.json();
      console.log(data);
    }





// $('button').on('click', handleGetData);

// function handleGetData(event) {
//     event.preventDefault();

// $.ajax({
//     url:"https://favqs.com/api/qotd"
//     })
//     .then(
//       (data) => {
//         $quote.text(data.body);
//         $author.text(data.author);
        
//       });
//     }





// function generateQuote() {
//     $.ajax(api_url).then(
//         function(data) {
//             $quote.text(data.body)
//             $author.text(data.author)
//         }
//     )
// }

// generateQuote();







// $button.on('click', generateQuote);

// function generateQuote() {

// $.ajax(api_url).then(
//     function(data){
        
//         console.log('quote is ready!');
//             console.log(data);
//             $quote.text(data.body)
//             $author.text(data.$author)
// })};
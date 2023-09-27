import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleshow]=useState(false);
 
useEffect(() => {
    window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleshow(true);
			} else handleshow(false);
		});
    return ()=>{
        window.removeEventListener("scroll", handleshow);}

},[]);
  return (
    <div className={'nav ${show && "nav_black"}'}>
        <img
        className='nav_logo'
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAB0CAMAAAD+ZS3YAAAAb1BMVEUAAADjCRToCRS0BxDgCRQqAgTtCRXRCBKWBg3VCRNsBQnFCBGNBgyQBg0nAQNJAwYTAQBOAwfMCBK6BxBVAwccAQPzCRWHBQwiAQM8AwVyBAqsBw/ACBExAgXaCRNmBAlfAwh9BQuiBg42AgRCAwZsu6z6AAAEN0lEQVR4nO2ZybaiMBBAScQwOICAOKAg+P7/GzupYpbXYluHRZ+6G0MIiTcJmbAshmEYhmEYhmEYhmEYhmEYhmEYhmEYhmH+xnmlia94caxifZVBuDTBDkiyHcatVrfEssLqNc6CR6rjoKjEPB37JuhDRm594+dmrrLz1zJrIaVUXi3jKH2RQ9jVwR7pzvzFYZyO1YqhN4ordErINdoPivJVk4+VmPvSvuCNzNxQ2dcu1toWmvSOMpEUQqKZK0UftTWlDuN0rK7n0BnFPXRKk6vcjGRkk49l3UxYniAc5PDcg0pGugvL+CkkCNuS5OZ7l1pGRMd3MtDN5sikc2QsyElBP8tNOPXpZIQ/LWPnNcJ0iQwu8QkIyk6mSZjLWTKuMinMe3KFRnIIXBoZWU3KqGtwQBLzVl1MKKjgjm/uJPtGxvk5NCnPc2QeWAO6n21k0/BUMkJOyyQTj2yhWwTNJcpEwzRvZdohwIfivQulDPT0eTI7EpkTyKwsaGdJMC73ZOTtMxn1rzJtf1JQLHa3emqgkhH5ZRmZpmX0DGzSRLKpSUoZM4MtKvPoxnlJMS4PZOJw2W523LQ20XAR972MkPcJmcdxD7yVceoxPHgn07ZMNy334qhklDsxaeaOwXOe72REitjzZc6NjCRy6ckI59fljBT9aWByaG5SOvNlcKrRURWtDCyPRBH+tjazZ8t4H8g8FGZ+IJWRGfwR11pWZh3VEyetzKoyleQ8X2TqDdeMbqaQ/AOZOzxJNPt3MjG0uErGMtKLYASI3g4A3gkpP5ApsZvRrMt6Mvjqr27joTmYeIRo0qw3MjqqJJbBTaTtCLHYCqBdAtDsZfoySfu+LyYTN0WmVP2skbHspWUOXYlUE00rU6mFZdoCzTBKLNP2s6VksDw4ZlJXYpl9s4gl3GkOF8OjnSZsZ274ExPLtFP+xNB8vgRJ95LOlRHO7lRe/SI5XPadTL0FOEZQ1snCIWDYht/LHCa6mayy+BZFjpeLbhSa2810IrN4sO3ci0Jr1DIFnmQdcU6gOZzpycDCbCQDyxn8XyOZOS3T40UGD5hcqz6dcUi2Zz2ZrXqVaRnLzGqZFtjl9GXOKRRl+i4u7Ug2zj2Z52s3+12m1zLwFWA0i7+TyboDJqhDmqVzTybEKXlKpvkUgXeUfg9kJ5PFcXwbLX2Fwo2nXkdDTx11s6fXNccaz5xCWhk8l9OrWPzLKb6+ee45m02cFR9lG1rh8R4kxbXc6TFkA8f9vmi/z+AJYN01V+MFKInMxTZtoHAbf83cU1kWj+BJUWdQVFGWJ9dUSmjrNoMvVVAS1CHFahNl6kO4OI9WVfkgyPYN92dRVqu6ltYebtq/z3YtdR3lZEcK/8R240iVEmw4z255+Ll//230uz9xvxyuW6KTQIZhGIZhGIZhGIZhGIZhGIZhGIZhGIb5b/kDFtFIz841uEUAAAAASUVORK5CYII='
    alt="Netflix Logo" />
    <img
    className='nav_avatar'
    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEUNfoD///8AenwAd3kegYMAdXjm8PBJk5UAcnT5/Pza6enk7e3L4OCpycrP4uM9kJLx+Ph8sLF7qqtzpaYmh4lgnJ281daOu7yfv8CZwsNsp6mxzs8yjI1SmJmGsrNroKGYkK2iAAACB0lEQVRoge3Y626jMBAFYDyDDabcCyYJhLz/W67pNglps9SWWWWlPd+fKKo8p2MM2IkiAAAAAAAAAPh3kfWiUiSrtnnv5A75TP0898TOA2SfayFEbabgdB6UrSTU4FpJNkv0oq4C0yn/rCSMW++UiBsVB6VzcS9VOKVzKXyH/MG6DSE6hz6oW49QcUC4LIRnH9ysR4gkYN5pPYeidKjEh93Co2xdKXOZ9sfOQ9Y7e3cexbtdc/a+5hHnqxGHoNVe+a52O0TfBqiAaIuP9+yjWxt8qq/ZoU84Hq/Zo+sUcmI+nu2j00xtl2qULaXfGvfLRzK+tJdIhkYv6TJp24T9ls7r3ucAAACw4XWvVUrj5j3dJ16S186E0mm0eykVvilbihVKHWLXeOJk1H57yA2/98OqifjnToij3lx34uUO4dHnxjobuu14Ip6Oq+Oa4+8D225nCm1OlD5fxkQyrYaHs5oOPQQs7geBRT6cY075ukVdPjmVcTKPtXgwRvusdvNYts7M0F6SqrOS82UeTPYlWNTFtMdPWwvuS/GN1rWl9fe/CHWcHBanK6JT/izlGV063Rde8VwVX+f2mWzwPSq5xUvuC7XZcz5X6c5Nr/JZTrPJnl2AzN4F9iH8d98myx0WJ81hNGX2ZmWlGYvmPO140PzpP+CPHmPr9gUAAAAAAAAAAAAA/ju/AO/0Em9DNbOMAAAAAElFTkSuQmCC'
    alt="Avater logo"/>
    </div>
  )
}

export default Nav
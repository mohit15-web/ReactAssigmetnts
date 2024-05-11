import React, { useEffect, useState } from 'react'

const data = [
    "https://imgs.search.brave.com/fqTbQXrCdaCuYsdZGKwt8dMW5Vso_m2j671rQ-yMx8s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waWNz/dW0ucGhvdG9zLzY0/MC80ODAvP2ltYWdl/PTM1Mw",
    "https://imgs.search.brave.com/Ok8LA1SJMlVNXGgaOZOSQ9gkAfzJu0iEr9WUsTBUQQ4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2Y0OC9yYW5k/b20tcGljcy0xLTEz/MjQyODcuanBnP2Zt/dA",
    "https://imgs.search.brave.com/j6bVwwo1cJpdpqyBU0ip9l3GjXSh6i_eRyLgt8f_Vvc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzYxMC9yYW5k/b20tMTU3NDM5MS5q/cGc_Zm10",
    "https://imgs.search.brave.com/0gcjdxQ3gvXxwxOj8MXw98a7A6pQX0EC3uoquzqQ8sU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2IyNC9yYW5k/b20tYXJ0LTQtMTU0/MjY0OS5qcGc_Zm10"
]

function Carousel() {
    const[preview,setPreview] = useState(0)

    const handleNext = () => {
        if(preview === data.length - 1) setPreview(0)
        else setPreview(preview + 1)
    }

    const handlePrevious = () => {
        if(preview === 0) setPreview(data.length - 1)
        else setPreview(preview - 1)
    }

    // useEffect(() => {
    //    let timer =  setTimeout(() => {
    //         handleNext()
    //     }, 2000);

    //     return(() => clearTimeout(timer))
    // },[preview])


    
const isValid = (word) => {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let alphabets = ['A', 'b', 'C', 'd', 'E', 'f', 'G', 'h', 'I', 'j', 'K', 'l', 'M', 'n', 'O', 'p', 'Q', 'r', 'S', 't', 'U', 'v', 'W', 'x', 'Y', 'z'];
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let vowel = false;
    let consonant = false;
    let numbers = false;
    
    if(word.length < 3){
        return false;
    } else {
        for(let ch of word){
            console.log(ch);
            if(vowels.includes(ch)){
                vowel = true;
            } else if(alphabets.includes(ch)){
                consonant = true;
            } else if(nums.includes(ch)){
                numbers = true;
            } else {
                return false;
            }
        }
    }
    return vowel && consonant;
}



    console.log("function called" , isValid("25Adas"));

  return (
    <div className='flex justify-center mt-20'>
        <button className=' font-bold text-xl mx-4' onClick={handlePrevious}>Previous</button>
        {
            data.map((item,i) => <img src={item} key={i} alt="wallpaper" className={'w-[700px] h-[500px] object-cover ' + (preview === i ? "block": "hidden")}/>)
        }
        <button className=' font-bold text-xl mx-4' onClick={handleNext}>Next</button>
    </div>
  )
}

export default Carousel
import { useState } from 'react'


const paginanueva = () => {

    const [watts, setWatts] = useState([])

    const [suma, setSuma] = useState(0)

    const [list, setList] = useState([])

    const onChange = (text,pos) => {
        const array = [...watts]
        array[pos] = parseInt(text)
        setWatts(array)
        
        if (watts.length !== 0) {
            setSuma(array.reduce((el, acc) => el + acc))
        }

    }

    const changeList = (num) => {
        let array = [] 
        for (let i = 0; i < num; i++) {
            array[i] = i
        }
        setList(array)
    }

    return (
        <div>
           <h1>Hola mundo</h1> 
           <select name="" id="" onChange={(e) => changeList(e.target.value)}>
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
               <option value={5}>5</option>
               <option value={6}>6</option>
           </select>
           <br/><br/>
           {
               list.map((num) => (
                   <input key={num} type="number" onChange={(e) => onChange(e.target.value, num)}/>
               ))
           }

            <h1>{suma}</h1>

    <h2>{list}</h2>
           <style jsx>{`
               div {
                   padding: 0 50px;
               }
           
               h1 {
                   color: red;
               }

               input {
                   display: block
               }
           
           `}</style>
        </div>
    )
}

export default paginanueva

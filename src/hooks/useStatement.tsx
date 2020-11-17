import { useState } from "react";
import {createID} from "../utils/createID";

type Statement = {
    selectedTag: string;
    selectedCategory: "-" | "+";
    comments: string;
    amount: string;
    id: Number;
    createdAt: string
}

const useStatement = () => {
    const [statements, setStatements] = useState<Statement[]>([]);

    // const savedStatements = JSON.parse(window.localStorage.getItem("XpensityStatements") || "[]");
    // if(savedStatements.length !== 0){
    //     setStatements(savedStatements)
    // }

    const addStatement = (statement: Statement) =>{
        if(statement.selectedTag===""){
            alert("Please Select a Tag")
            return false;
        }else if(statement.amount==="0"){
            alert("Amount Cannot be 0")
            return false;
        }else{
            statement.id = createID();
            statement.createdAt = new Date().toISOString();
            const copy = [...statements]
            copy.push(statement)
            setStatements(copy)
            window.localStorage.setItem("XpensityStatements", JSON.stringify(copy))
            return true
        }
    }

    return { statements, addStatement}
}

export {useStatement}
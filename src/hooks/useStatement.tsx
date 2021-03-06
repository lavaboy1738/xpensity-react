import { useState, useEffect } from "react";
import {createID} from "../utils/createID";

type Statement = {
    selectedTag: string;
    selectedCategory: "-" | "+";
    comments: string;
    amount: string;
    id: number;
    createdAt: string
}

export type NewStatement = {
    selectedTag: string;
    selectedCategory: "-" | "+";
    comments: string;
    amount: number;
    id: number;
    createdAt: string
}

const useStatement = () => {
    const [statements, setStatements] = useState<NewStatement[]>([]);

    useEffect(()=>{
        const savedStatements = JSON.parse(window.localStorage.getItem("XpensityStatements") || "[]");
        if(savedStatements.length > 0){
            setStatements(savedStatements);
        }
    }, [])

    const addStatement = (statement: Statement) =>{
        if(statement.selectedTag===""){
            alert("Please Select a Tag")
            return false;
        }else if(statement.amount==="0"){
            alert("Amount Cannot be 0")
            return false;
        }else{
            //take care of the amount if there are extra zeros at the end
            const statementCopy = {...statement, amount: parseFloat(statement.amount)}
            statementCopy.id = createID();
            statementCopy.createdAt = new Date().toISOString();
            const copy = [...statements]
            copy.push(statementCopy)
            setStatements(copy)
            window.localStorage.setItem("XpensityStatements", JSON.stringify(copy))
            return true
        }
    }

    const getStatement = (statementID: string) => {
        return statements.filter(statement=> statement.id === parseInt(statementID))[0]
    }

    const deleteStatement = (statementID: string) => {
        const newStatements = statements.filter(statement=> statement.id !== parseInt(statementID));
        setStatements(newStatements)
        window.localStorage.setItem("XpensityStatements", JSON.stringify(newStatements))
    }

    return { statements, addStatement, getStatement, deleteStatement}
}

export {useStatement}
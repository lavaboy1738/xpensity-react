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

    const addStatement = (statement: Statement) =>{
        statement.id = createID();
        statement.createdAt = new Date().toISOString();
        const copy = [...statements]
        copy.push(statement)
        setStatements(copy)
        window.localStorage.setItem("XpensityStatements", JSON.stringify(copy))
    }

    return { statements, addStatement}
}

export {useStatement}
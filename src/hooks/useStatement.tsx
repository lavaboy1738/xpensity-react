import { useState } from "react";

type Statement = {
    selectedTag: string;
    selectedCategory: "-" | "+";
    comments: string;
    amount: string;
    // time: string;
}

const useStatement = () => {
    const [statements, setStatements] = useState<Statement[]>([]);

    const addStatement = (statement: Statement) =>{
        const copy = [...statements]
        copy.push(statement)
        setStatements(copy)
        window.localStorage.setItem("XpensityStatements", JSON.stringify(copy))
    }

    return { statements, addStatement}
}

export {useStatement}
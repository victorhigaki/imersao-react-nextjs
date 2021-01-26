import QuizBackground from "../../src/components/QuizBackground"
import db from "../../db.json";

const Quiz = () => {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <h1>teste</h1>
        </QuizBackground>
    );
}

export default Quiz;
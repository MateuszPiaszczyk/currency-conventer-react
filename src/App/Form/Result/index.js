import { Wrapper } from "./styled";


export const Result = ({ result }) => (
    <Wrapper>
        {result && (
            <>
                💸 &nbsp;{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}    
                <strong>
                  {result.targetResult.toFixed(2)}&nbsp;{result.currency} 
                </strong>&nbsp;
                💸
            </>
        )}
    </Wrapper>
)

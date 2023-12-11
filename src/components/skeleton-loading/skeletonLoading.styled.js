import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-self: center;
    border-radius: 15px;
    margin: 15px 0;
    border-color: #b3ffff;
    border-style: solid;
    border-width: 1px;
`

export const Content = styled.div `
    margin: 8px;
    width: 90%;
    height: 335px;
    margin: 8px;
    max-width: 300px;
    justify-content: center;
    justify-self: center;
    opacity: 0.6;
    border-radius: 10px;
    position: relative;
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
    background: linear-gradient(
        90deg,
        #647a80 0%,
        #dad4d4 50%,
        #647a80 100%        
    );
    background-size: 400% 400%;
    animation: animator 1.2s ease-in-out infinite;
    @keyframes  animator {
        from {            
            background-position: 0% 0%;
        }
        to {
            background-position: 135% 135%;
        }
    }
`
export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;   
    padding: 15px 0;

    @media (min-width: 600px){        
        grid-template-columns: 1fr 1fr;    
        padding: 15px  0;
    }

    @media (min-width: 900px){        
        grid-template-columns: 1fr 1fr 1fr;     
        padding: 15px  0;
    }

    @media (min-width: 1270px){        
        grid-template-columns: 1fr 1fr 1fr 1fr;     
        padding: 15px  0;
    }

    @media (min-width: 1520px){    
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;    
        padding: 15px 0;    
    }
`;
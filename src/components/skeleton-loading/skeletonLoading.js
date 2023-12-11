import { useState } from "react";
import { Container, Content, GridWrapper } from "./skeletonLoading.styled";

export const Skeleton =({props})=>{
    const [lines]=useState(props); 
    return (
        <Container>
            <GridWrapper>
                {[...Array(lines)].map((_, index)=> (
                    <Content key={index}>
                        
                    </Content>
                ))}
            </GridWrapper>
        </Container>        
    )
}

export default Skeleton;
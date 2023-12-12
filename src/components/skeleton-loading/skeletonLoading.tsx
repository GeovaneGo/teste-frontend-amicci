import { Container, Content, GridWrapper } from "./skeletonLoading.styled";

export const Skeleton =()=>{
    return (
        <Container>
            <GridWrapper>
                    <Content $heightSize={"30px"}>                        
                    </Content>
            </GridWrapper>
            <GridWrapper>
                    <Content $widthSize={"35%"} $heightSize={"30px"}>                        
                    </Content>
                    <Content $widthSize={"35%"} $heightSize={"30px"}>                        
                    </Content>
            </GridWrapper>
            <GridWrapper>
                    <Content $widthSize={"100px"} $heightSize={"100px"}>                        
                    </Content>
            </GridWrapper>
            <GridWrapper>
                    <Content $widthSize={"35%"} $heightSize={"30px"}>                        
                    </Content>
                    <Content $widthSize={"35%"} $heightSize={"30px"}>                        
                    </Content>
            </GridWrapper>
            <GridWrapper>
                    <Content $widthSize={"99%"} $heightSize={"200px"}>                        
                    </Content>
            </GridWrapper>
        </Container>        
    )
}

export default Skeleton;
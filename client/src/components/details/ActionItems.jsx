import { Box, Button, styled } from "@mui/material";
import { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "350px",
  padding: "20px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

 
 

const Image = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "320px",      // <-- this prevents stretching & overlap
  objectFit: "contain",
  padding: "15px",
});


const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",        // Equal width buttons
  borderRadius: "2px",
  height: "50px",
  color: "#fff",
  marginTop: "12px",    // Clean spacing between buttons
  textTransform: "none", // Optional: Makes text cleaner like Flipkart
  fontWeight: 600        // Optional: Enhances appearance
}));




const ActionItems = ({ product }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();

const {id} = product;

const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
navigate('/cart')
  }

  const buyNow = () => {
 let response = payUsingPaytm({amount: 500, email: 'sherr@gmail.com'})
  
  let information = {
    action: 'https://securegw-stage.paytm.in/order/process',
    params: response 
  }
  post(information);
  }
  
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="details" />
      </Box>


      <StyledButton
  variant="contained"
  onClick={addItemToCart}
  style={{ background: "#ff9f00" }}
>
  <ShoppingCartIcon />
  &nbsp; Add to Cart
</StyledButton>

<StyledButton
  variant="contained"
  onClick={buyNow}
  style={{ background: "#fb541b" }}
>
  <FlashOnIcon />
  &nbsp; Buy Now
</StyledButton>




    </LeftContainer>
  );
};

export default ActionItems;

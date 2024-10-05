import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function QrCode() {
  const [qrCode, setQrCode] = useState(""); 

  async function getQr(example) {
    try {
      let res = await axios.get(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${example}`
      );
      setQrCode(res.config.url); // تخزين الرابط في الحالة
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <TextField
        label="QR Code"
        name="qr-code"
        onChange={(e) => getQr(e.target.value)}
        sx={{ mb: 2 }}
      />

      {qrCode && (
        <Box
          component="img"
          src={qrCode}
          alt="QR Code"
          sx={{ width: 150, height: 150 }}
        />
      )}
    </Box>
  );
}

export default QrCode;

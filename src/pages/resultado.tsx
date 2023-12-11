import { useFipe } from "@/contexts/fipe";
import { Chip, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Result = () => {
  const { loadings: { priceLoading }, price: { Modelo, Valor } } = useFipe();
  const router = useRouter();
  useEffect(() => {
    if (!priceLoading && !Valor) {
      router.push('/');
    }
  }, [priceLoading, Valor, router]);

  if (priceLoading) {
    return <Typography variant="h3">Carregando...</Typography>
  }

  return (
    <Stack
      spacing={2}
      p={2}
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        background: theme.palette.success.light,
        height: '100vh'
      })}
    >
      <Typography variant="h3" align="center">Tabela Fipe: {Modelo}</Typography>
      <Chip
        variant="filled"
        color="success"
        label={Valor}
        sx={(theme) => ({ fontSize: theme.typography.fontSize * 2 })}
      />
      <Typography variant="caption">Este é o preço de compra do veículo</Typography>
    </Stack>
  )
}

export default Result;
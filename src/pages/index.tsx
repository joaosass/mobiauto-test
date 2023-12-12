import Input from "@/components/Input";
import { useFipe } from "@/contexts/fipe";
import { Autocomplete, Button, Card, Stack, TextField, Typography } from "@mui/material";

const Search = () => {
  const {
    brands,
    loadings: { brandLoading, modelLoading, modelYearLoading },
    models,
    modelsYears,
    selectedModel,
    selectedModelYear,
    fetchPrice,
    setSelectedBrand,
    setSelectedModel,
    setSelectedModelYear
  } = useFipe();

  return (
    <Stack
      spacing={2}
      p={2}
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        background: theme.palette.grey[200],
        height: '100vh'
      })}
    >
      <Typography variant="h3" align="center">Tabela Fipe</Typography>
      <Typography variant="h4" align="center">Consulte o valor de um veículo de forma gratuita</Typography>
      <Card variant="elevation" sx={{ width: 600, maxWidth: "100%" }}>
        <Stack alignItems="center" py={4} px={8} spacing={2}>
          <Input loading={brandLoading} options={brands} onChange={setSelectedBrand} label="Marca" />
          <Input loading={modelLoading} options={models} onChange={setSelectedModel} label="Modelo" />
          {selectedModel ? <Input loading={modelYearLoading} options={modelsYears} onChange={setSelectedModelYear} label="Ano" /> : null}
          <Button variant="contained" disabled={!selectedModelYear} onClick={fetchPrice}>Consultar preço</Button>
        </Stack>
      </Card>
    </Stack>
  )
}

export default Search;
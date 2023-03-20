import { DetailProduct } from "./components";
import { getPruductDiscount } from "./services";

export default async function ProductDetail({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const productsDetail = await getPruductDiscount(params.id);

  return <DetailProduct props={productsDetail.data[0]} />;
}

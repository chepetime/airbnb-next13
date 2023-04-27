import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import getReservations from "@/actions/getReservations";

import EmptyState from "@/components/EmptyState";

import ListingClient from "./ListingClient";

interface ListingPageParams {
  listingId?: string;
}

export default async function ListingPage({
  params,
}: {
  params: ListingPageParams;
}) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <div></div>;
}

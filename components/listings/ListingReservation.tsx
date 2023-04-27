"use client";

import { Range } from "react-date-range";

import Button from "@/components/Button";
import Calendar from "@/components/inputs/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export default function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) {
  return <div>ListingReservation</div>;
}

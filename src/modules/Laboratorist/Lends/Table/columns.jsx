import { Badge } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import moment from "moment";
import React from "react";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_lend",
  },
  {
    Header: "Fecha y hora",
    accessor: "fecha_hora_presta",
    Cell({ row }) {
      const sqlDate = parseInt(row.original.fecha_hora_presta);

      const date = moment(sqlDate).format("Do [de] MMMM [del] YYYY [a las] H:mm");

      return (
        <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
          {date}
        </Tooltip>
      );
    },
  },
  {
    Header: "Plazo",
    accessor: "fecha_vencimiento",
    Cell({ row }) {
      const sqlDate = parseInt(row.original.fecha_vencimiento);

      const date = moment(sqlDate).format("Do [de] MMMM [del] YYYY [a las] H:mm");

      const fecha_inicio = moment(parseInt(row.original.fecha_hora_presta));

      return (
        <>
          hasta el{" "}
          <Tooltip aria-label={fecha_inicio.to(sqlDate)} label={fecha_inicio.to(sqlDate)}>
            {date}
          </Tooltip>
        </>
      );
    },
  },
  {
    Header: "Devolucion",
    accessor: "fecha_devolucion",
    Cell({ row }) {
      if (row.original.fecha_devolucion == null)
        return <Badge colorScheme="yellow">NO DEVUELTO</Badge>;

      const sqlDate = parseInt(row.original.fecha_devolucion);

      const date = moment(sqlDate).format("Do [de] MMMM [del] YYYY [a las] H:mm");

      return (
        <Tooltip aria-label={moment(sqlDate).fromNow()} label={moment(sqlDate).fromNow()}>
          {date}
        </Tooltip>
      );
    },
  },
  {
    Header: "Reserva",
    accessor: "reservation.id_reserva",
  },
];

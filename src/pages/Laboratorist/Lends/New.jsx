import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useUsersAndMaterials } from "@graphql/shared/custom-hooks";
import { Form, Formik } from "formik";
import moment from "moment";
import React, { useState } from "react";

import { useMe } from "../../../graphql/auth/custom-hook";
import { useCreateLend } from "../../../graphql/lends/custom-hooks";
import { useCreateReservation } from "../../../graphql/reservations/custom-hooks";

import LendFields from "./Fields";

const NewLend = () => {
  const { loading, data, error } = useUsersAndMaterials();
  const { loading: loadingMe, data: dataMe } = useMe();
  const [
    createReservation,
    { loading: loadingCreateReservation },
    { loading: loadingId, data: dataId },
  ] = useCreateReservation();
  const [createLend, { loading: loadingCreateLend }] = useCreateLend();

  if (loading || loadingId || loadingMe) return "loading....";

  return (
    <Dashboard hasNoActions title="Nuevo Prestamo">
      <Formik
        initialValues={{ user: "", materials: [], fecha_vencimiento: "" }}
        validateOnChange={false}
        onSubmit={async (values, { setErrors }) => {
          values.materials.map((material, i, { length }) => {
            const fecha_hora = moment().add(i, "seconds").format("YYYY-MM-DD HH:mm:ss");

            return createReservation({
              variables: {
                data: {
                  id_reserva: dataId.getMaxId + 1,
                  user: {
                    cedula: parseInt(dataMe.me.cedula),
                  },
                  material: {
                    id_material: parseInt(material),
                  },
                  fecha_hora,
                  finalizada: false,
                },
              },
              update: (cache, { data }) => {
                if (length - 1 === i) {
                  cache.evict({ fieldName: "getMaxId" });

                  createLend({
                    variables: {
                      data: {
                        fecha_hora_presta: fecha_hora,
                        fecha_vencimiento: moment(values.fecha_vencimiento).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                        reservation: {
                          id_reserva: parseInt(data.createReservation.reservation.id_reserva),
                          fecha_hora: fecha_hora,
                        },
                        user: {
                          cedula: dataMe.me.cedula,
                        },
                      },
                    },
                  });
                }
              },
            });
          });
        }}
      >
        {({ setFieldValue, dirty }) => (
          <Stack as={Form} spacing={6}>
            <LendFields
              materials={data?.getMaterials}
              setFieldValue={setFieldValue}
              users={data?.getUsers}
            />

            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loadingCreateLend || loadingCreateReservation}
              loadingText="Creando prestamo..."
              type="submit"
              variant="primary"
            >
              Crear prestamo
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewLend;

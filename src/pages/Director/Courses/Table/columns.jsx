import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Stack } from "@chakra-ui/layout";
import { useDeleteUser } from "@graphql/users/custom-hooks";
import { momentizeDate } from "@utils/momentizeDate";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router";

export const COLUMNS = [
  {
    Header: "Token",
    accessor: "course_token",
  },
  {
    Header: "Nombre",
    accessor: "course_name",
  },
  {
    Header: "Institución",
    accessor: "institution.institution_name",
  },
  {
    header: "",
    id: "click-me-button",
    Cell({ row }) {
      const history = useHistory();

      return (
        <Stack direction="row">
          <IconButton
            aria-label="Editar Curso"
            color="lendlab.light.red.400"
            icon={<Icon as={FiEdit2} color="lendlab.yellow" />}
            variant="ghost"
            onClick={() =>
              history.push("/director/cursos/" + row.original.course_token)
            }
          />
        </Stack>
      );
    },
  },
];

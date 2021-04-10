import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import "./Apartments.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStaticQuery, graphql } from "gatsby";

function createData(
  type: string,
  rooms: string,
  floor: string,
  area: string,
  terrace: string,
  courtyard?: string
) {
  return { type, rooms, floor, area, terrace, courtyard };
}

const rows = [
  createData("01", "2", "ground", "65,46m2", "45,95m2", null),
  createData("02", "2", "ground", "70,24m2", "18,56m2", "31,04m2"),
  createData("03", "2", "ground", "63,00m2", "14,64m2", "22,62m2"),
  createData("04", "2", "ground", "83,55m2", "20,20m2", "22,43m2"),
  createData("05", "2", "ground", "87,15m2", "20,20m2", "52,56m2"),
  createData("06", "2", "ground", "53,04m2", "14,54m2", null),
  createData("07", "2", "first", "70,01m2", "43,59m2", null),
  createData("08", "2", "first", "70,20m2", "18,40m2", null),
  createData("09", "2", "first", "75,15m2", "18,52m2", null),
  createData("10", "2", "first", "60,38m2", "18,31m2", null),
  createData("11", "1", "first", "50,77m2", "15,90m2", null),
  createData("12", "2", "second", "54,08m2", "14,40m2", null),
  createData("13", "2", "second", "63,12m2", "14,49m2", null),
  createData("14", "2", "second", "66,80m2", "14,49m2", null),
  createData("15", "2", "second", "52,22m2", "14,33m2", null),
  createData("16", "1", "second", "43,67m2", "12,42m2", null),
];

export const Apartments = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query Apartments {
      documents: allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <section id="apartments" className="section-apartments">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          {t("apartments.title")}
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-head">
                <TableCell>{t("apartments.table.typology")}</TableCell>
                <TableCell>{t("apartments.table.rooms")}</TableCell>
                <TableCell>{t("apartments.table.floor")}</TableCell>
                <TableCell>{t("apartments.table.area")}</TableCell>
                <TableCell>{t("apartments.table.terrace")}</TableCell>
                <TableCell>{t("apartments.table.courtyard")}</TableCell>
                <TableCell align="right">
                  {t("apartments.table.blueprint")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {rows.map((row, index) => (
                <TableRow key={row.type}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.rooms}</TableCell>
                  <TableCell>{t(`apartments.table.${row.floor}`)}</TableCell>
                  <TableCell>{row.area}</TableCell>
                  <TableCell>{row.terrace}</TableCell>
                  <TableCell>{row.courtyard}</TableCell>
                  <TableCell align="right">
                    <a
                      href={
                        data.documents.edges.find(pdf =>
                          pdf.node.publicURL.endsWith(`/${index + 1}.pdf`)
                        ).node.publicURL
                      }
                      download
                    >
                      {t("apartments.table.download")}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
};

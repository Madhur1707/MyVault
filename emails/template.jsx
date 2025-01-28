import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email({
  username = "Madhur Pathak",
  type = "budget-alert",
  data = {percentageUsed: 80, budgetAmount: 1000, totalExpenses: 800},
}) {
  if (type === "monthly-report") {
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head>
          <Preview>Budget Alert</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <Heading style={styles.title}>Budget Alert</Heading>
              <Text style={styles.text}>Hello {username}</Text>
              <Text style={styles.text}>
                You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
                monthly budget.
              </Text>
              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.text}>Budget Amount</Text>
                  <Text style={styles.heading}>${data?.budgetAmount}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Spent So Far</Text>
                  <Text style={styles.heading}>${data?.totalExpenses}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Remaining</Text>
                  <Text style={styles.heading}>
                    ${data?.budgetAmount - data?.totalExpenses}
                  </Text>
                </div>
              </Section>
            </Container>
          </Body>
        </Head>
      </Html>
    );
  }
}

const styles = {
    body: {
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      backgroundColor: "#ffffff",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#1f2937",
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 0 20px",
    },
    text: {
      color: "#333333",
      fontSize: "16px",
      lineHeight: "1.5",
      margin: "0 0 10px",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    stat: {
      flex: "1",
      textAlign: "center",
    },
    heading: {
      color: "#1f2937",
      fontSize: "24px",
      fontWeight: "bold",
      margin: "10px 0",
    },
  };
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

export default function EmailTemplate({
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {/* Header with accent */}
            <div style={styles.headerAccent}></div>

            <Heading style={styles.title}>
              <span style={styles.titleAccent}>Monthly</span> Financial Report
            </Heading>

            <Text style={styles.greeting}>Hello {userName},</Text>
            <Text style={styles.introText}>
              Here's your financial summary for <strong>{data?.month}</strong>:
            </Text>

            {/* Main Stats */}

            <Section style={styles.section}>
              <Heading style={styles.sectionHeading}>Financial Summary</Heading>

              <div style={styles.statItem}>
                <Text style={styles.statItemLabel}>Total Income</Text>
                <Text style={styles.statItemValue}>
                  ₹{data?.stats.totalIncome.toLocaleString()}
                </Text>
              </div>

              <div style={styles.statItem}>
                <Text style={styles.statItemLabel}>Total Expenses</Text>
                <Text style={styles.statItemValue}>
                  ₹{data?.stats.totalExpenses.toLocaleString()}
                </Text>
              </div>

              <div style={styles.statItem}>
                <Text style={styles.statItemLabel}>Net Savings</Text>
                <Text
                  style={{
                    ...styles.statItemValue,
                    ...(data?.stats.totalIncome - data?.stats.totalExpenses >= 0
                      ? styles.positiveValue
                      : styles.negativeValue),
                  }}
                >
                  ₹
                  {(
                    data?.stats.totalIncome - data?.stats.totalExpenses
                  ).toLocaleString()}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>
                  Expenses by Category
                </Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.categoryName}>
                        {capitalizeFirstLetter(category)}
                      </Text>
                      <Text style={styles.categoryAmount}>
                        ₹{amount.toLocaleString()}
                      </Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>
                  <span style={styles.aiIcon}>🤖</span> Wealth Insights
                </Heading>
                <div style={styles.insightsContainer}>
                  {data.insights.map((insight, index) => (
                    <div key={index} style={styles.insightItem}>
                      <div style={styles.bulletPoint}>•</div>
                      <Text style={styles.insightText}>{insight}</Text>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <div style={styles.footer}>
              <Text style={styles.footerText}>
                Thank you for using <strong>MyVault</strong>. Keep tracking your
                finances for better financial health!
              </Text>
              <div style={styles.footerDivider}></div>
              <Text style={styles.footerSmallText}>
                Need help? Contact our support team at support@myvault.com
              </Text>
            </div>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head>
          <Preview>Budget Alert</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <div style={styles.headerAccent}></div>
              <Heading style={styles.alertTitle}>
                <span style={styles.alertIcon}>⚠️</span> Budget Alert
              </Heading>
              <Text style={styles.greeting}>Hello {userName}</Text>
              <Text style={styles.alertText}>
                You've used <strong>{data?.percentageUsed.toFixed(1)}%</strong>{" "}
                of your monthly budget.
              </Text>

              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Budget Amount</Text>
                  <Text style={styles.statValue}>
                    ₹{data?.budgetAmount.toLocaleString()}
                  </Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Spent So Far</Text>
                  <Text style={styles.statValue}>
                    ₹{data?.totalExpenses.toLocaleString()}
                  </Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Remaining</Text>
                  <Text
                    style={{
                      ...styles.statValue,
                      color:
                        data?.budgetAmount - data?.totalExpenses >= 0
                          ? "#10b981"
                          : "#ef4444",
                    }}
                  >
                    ₹
                    {(
                      data?.budgetAmount - data?.totalExpenses
                    ).toLocaleString()}
                  </Text>
                </div>
              </Section>

              <div style={styles.progressBarContainer}>
                <div style={styles.progressBarBackground}>
                  <div
                    style={{
                      ...styles.progressBarFill,
                      width: `${Math.min(100, data?.percentageUsed)}%`,
                      backgroundColor:
                        data?.percentageUsed > 90
                          ? "#ef4444"
                          : data?.percentageUsed > 75
                            ? "#f59e0b"
                            : "#3b82f6",
                    }}
                  ></div>
                </div>
                <div style={styles.progressBarLabels}>
                  <Text style={styles.progressBarLabel}>0%</Text>
                  <Text style={styles.progressBarLabel}>50%</Text>
                  <Text style={styles.progressBarLabel}>100%</Text>
                </div>
              </div>

              <div style={styles.footer}>
                <Text style={styles.footerText}>
                  Consider reviewing your spending to stay on track with your
                  budget goals.
                </Text>
                <div style={styles.footerDivider}></div>
                <Text style={styles.footerSmallText}>
                  Manage your budget settings in your MyVault account.
                </Text>
              </div>
            </Container>
          </Body>
        </Head>
      </Html>
    );
  }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = {
  body: {
    backgroundColor: "#f8fafc",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: "0",
    margin: "0",
    lineHeight: "1.5",
    color: "#334155",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 32px",
    borderRadius: "12px",
    maxWidth: "600px",
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    position: "relative",
    overflow: "hidden",
  },
  headerAccent: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "6px",
    background: "linear-gradient(90deg, #3b82f6 0%, #10b981 50%, #6366f1 100%)",
  },
  title: {
    color: "#1e293b",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    margin: "0 0 24px",
    paddingBottom: "16px",
    borderBottom: "1px solid #e2e8f0",
  },
  titleAccent: {
    color: "#3b82f6",
  },
  alertTitle: {
    color: "#1e293b",
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "center",
    margin: "0 0 20px",
    paddingBottom: "16px",
    borderBottom: "1px solid #e2e8f0",
  },
  alertIcon: {
    marginRight: "8px",
  },
  greeting: {
    color: "#334155",
    fontSize: "16px",
    margin: "0 0 16px",
  },
  introText: {
    color: "#475569",
    fontSize: "16px",
    margin: "0 0 24px",
  },
  alertText: {
    color: "#475569",
    fontSize: "16px",
    margin: "0 0 24px",
    textAlign: "center",
  },

  statsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    margin: "24px 0",
  },
  stat: {
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "left",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statLabel: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
  },
  statValue: {
    color: "#1e293b",
    fontSize: "24px",
    fontWeight: "700",
    margin: "0",
    textAlign: "right",
  },
  section: {
    margin: "32px 0",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "0",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
  },
  sectionHeading: {
    color: "#1e293b",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
    padding: "20px 24px",
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
  },

  statItem: {
    padding: "20px 24px",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ":last-child": {
      borderBottom: "none",
    },
  },
  statItemLabel: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
  },
  statItemValue: {
    color: "#1e293b",
    fontSize: "20px",
    fontWeight: "700",
    margin: "0",
  },
  positiveValue: {
    color: "#10b981",
  },
  negativeValue: {
    color: "#ef4444",
  },
  aiIcon: {
    marginRight: "8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #e2e8f0",
  },
  categoryName: {
    color: "#334155",
    fontSize: "14px",
    fontWeight: "500",
  },
  categoryAmount: {
    color: "#1e293b",
    fontSize: "14px",
    fontWeight: "600",
  },
  insightsContainer: {
    marginTop: "12px",
  },
  insightItem: {
    display: "flex",
    marginBottom: "12px",
  },
  bulletPoint: {
    color: "#3b82f6",
    marginRight: "12px",
    fontWeight: "bold",
  },
  insightText: {
    color: "#475569",
    fontSize: "14px",
    margin: "0",
    flex: "1",
  },
  progressBarContainer: {
    margin: "24px 0 32px",
  },
  progressBarBackground: {
    height: "8px",
    backgroundColor: "#e2e8f0",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "8px",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },
  progressBarLabels: {
    display: "flex",
    justifyContent: "space-between",
  },
  progressBarLabel: {
    color: "#64748b",
    fontSize: "12px",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
  },
  footerText: {
    color: "#475569",
    fontSize: "14px",
    margin: "0 0 16px",
  },
  footerSmallText: {
    color: "#94a3b8",
    fontSize: "12px",
    margin: "16px 0 0",
  },
  footerDivider: {
    height: "1px",
    backgroundColor: "#e2e8f0",
    margin: "16px 0",
  },
};

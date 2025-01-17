import Alert from '../models/Alert';

interface AlertDocument {
  coinId: string;
  targetPrice: number;
  direction: 'above' | 'below';
  userId: string;
}

function evaluateAlert(alert: AlertDocument, currentPrice: number): boolean {
  if (alert.direction === 'above') {
    return currentPrice >= alert.targetPrice;
  } else {
    // 'below'
    return currentPrice <= alert.targetPrice;
  }
}

export async function checkAlertsForCoin(coinId: string, currentPrice: number) {
  try {
    const alerts = await Alert.find({ coinId });
    alerts.forEach((alertDoc) => {
      if (evaluateAlert(alertDoc, currentPrice)) {
        // Here, you can send an email, SMS, or push notification.
        // For demo, let's log to console:
        console.log(
          `ALERT TRIGGERED for user ${alertDoc.userId} on coin ${coinId}: current price is ${currentPrice}`
        );
      }
    });
  } catch (err) {
    console.error('Error checking alerts:', err);
  }
}

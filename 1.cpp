#include <iostream>
using namespace std;

void divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw runtime_error("Division by zero is not allowed.");
    }
    cout << "Result: " << numerator / denominator << endl; 90 +
}

int main() {
    int num, denom;

    cout << "Enter numerator: ";
    cin >> num;
    cout << "Enter denominator: ";
    cin >> denom;

    try {
        divide(num, denom);
    } catch (const runtime_error& e) {
        cout << "Exception caught: " << e.what() << endl;
    }

    cout << "Program continues..." << endl;

    return 0;
}

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import yulesimon

size = 50

def zipf_distribution(size, s=1.0):
    ranks = np.arange(1, size + 1)
    return 1 / ranks**s

def zipf_mandelbrot_distribution(size, q=3, s=1.1):
    ranks = np.arange(1, size + 1)
    values = 1 / (ranks + q)**s
    return values / values[0]  # Normalize to start at the same y-axis

def gusein_zade_distribution(size):
    ranks = np.arange(1, size + 1)
    values = 1 - (ranks / size)**2  # Quadratic decay
    return values / values[0]  # Normalize to start at the same y-axis

def flat_distribution(size):
    return np.ones(size)  # Every rank has the same frequency

def decreasing_s_curve_distribution(size, L=1, x0=size//2, k=0.2):
    ranks = np.arange(1, size + 1)
    values = L / (1 + np.exp(k * (ranks - x0)))  # Flip logistic curve for decreasing trend
    return values / values[0]  # Normalize to start at the same y-axis

def yule_distribution(size, alpha=2.0):
    ranks = np.arange(1, size + 1)
    values = yulesimon.pmf(ranks, alpha)  # Use pmf instead of pdf
    return values / values[0]  # Normalize to start at the same y-axis

size = 50  # Number of ranks
zipf_values = zipf_distribution(size, s=1.1)
zipf_mandelbrot_values = zipf_mandelbrot_distribution(size, q=3, s=1.1)
gusein_zade_values = gusein_zade_distribution(size)
flat_values = flat_distribution(size)
decreasing_s_curve_values = decreasing_s_curve_distribution(size)
yule_values = yule_distribution(size, alpha=2.0)

plt.figure(figsize=(10, 5))
plt.plot(range(1, size + 1), zipf_values, label="Zipf Distribution", marker="o")
plt.plot(range(1, size + 1), zipf_mandelbrot_values, label="Zipf-Mandelbrot Distribution", marker="s")
plt.plot(range(1, size + 1), gusein_zade_values, label="Gusein-Zade Distribution", marker="^")
plt.plot(range(1, size + 1), flat_values, label="Flat Distribution", linestyle="dashed")
plt.plot(range(1, size + 1), decreasing_s_curve_values, label="Decreasing S-Curve", linestyle="dotted", color="purple")
plt.plot(range(1, size + 1), yule_values, label="Yule-Simon Distribution", linestyle="dashdot", color="green")

plt.xlabel("Rank")
plt.ylabel("Normalized Frequency")
plt.title("Comparison of Zipfian, Zipf-Mandelbrot, Gusein-Zade, Flat, Decreasing S-Curve, and Yule-Simon Distributions")
plt.legend()
plt.grid(True)
plt.show()
from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in vendor_application/__init__.py
from vendor_application import __version__ as version

setup(
	name="vendor_application",
	version=version,
	description="Vendor Application",
	author="Mazeworks",
	author_email="admin@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
